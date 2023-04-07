#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, make_response, jsonify, session, request
from flask_migrate import Migrate
from flask_restful import Api, Resource
from sqlalchemy.exc import IntegrityError
from flask_cors import CORS

# Local imports
from config import app, db, api
from models import User, Recipe, Ingredient, Comment, RecipeIngredients


# Views go here!

@app.route('/')
def index():
    return '<h1>BACCCHUS BITES</h1>'


class Signup(Resource):
    def post(self):
        request_json = request.get_json()

        username = request.get_json().get('username')
        password = request.get_json().get('password')
        
        user = User(
            username = username 
        )
        user.password_hash = password


        print('first')

        try:

            print('here!')
            print(user)
            print(user.to_dict())
            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id


            return user.to_dict(), 201

        except IntegrityError as ie:
            print(ie.orig)
            print(ie.statement)
            return {'error': '422 Unprocessable Entity'}, 422

api.add_resource(Signup, '/signup', endpoint='signup')


class CheckSession(Resource):
    def get(self):
        # if the user is logged in (if their user_id is in the session object):
        if session.get('user_id'):

            user = User.query.filter_by(id=session['user_id']).first()

            if user:

                return make_response(user.to_dict(), 200)

        return make_response({'error': '401: Not Authorized'}, 401)
    
api.add_resource(CheckSession, '/check_session', endpoint='check_session')


class Login(Resource):
    def post(self):

        request_json = request.get_json()

        username = request.get_json()['username']
        password = request.get_json()['password']

        user = User.query.filter_by(username=username).first()

        if user:

            if user.authenticate(password):

                session['user_id'] = user.id

                return make_response(user.to_dict())

        return make_response({'error': '401: Not Authorized'}, 401)

api.add_resource(Login, '/login', endpoint='login')


class Logout(Resource):

    def delete(self):

        # if the user is logged in 
        if session.get('user_id'):

            # Remove the user's ID from the session object.
            session['user_id'] = None

        return make_response({'error': '401: Unauthorized'}, 401)
    
api.add_resource(Logout, '/logout', endpoint='logout')


class Users(Resource):
    def get(self):
        users = User.query.all()
        users_dict =  [user.to_dict() for user in users]

        response = make_response(
            jsonify(users_dict),
            200
        )

        return response 
    
api.add_resource(Users, '/users')


class Recipes(Resource):
    def get(self):

        recipes = Recipe.query.all()
        recipes_dict =  [recipe.to_dict() for recipe in recipes]

        response = make_response(
            jsonify(recipes_dict),
            200
        )

        return response 

api.add_resource(Recipes, '/recipes')   


class RecipesById(Resource):
    def get(self,id):

        recipe = Recipe.query.filter(Recipe.id == id).first()
        recipe_dictionary= recipe.to_dict()

        if not recipe:
            return make_response(
                {"error": "Recipe not found"},
                404
            )
        else:
            return make_response(
                jsonify(recipe_dictionary),
                200
            )
    
api.add_resource(RecipesById, '/recipes/<int:id>')


class Ingredients(Resource):
    def get(self):

        ingredients = Ingredient.query.all()
        ingredients_dict =  [ingredient.to_dict() for ingredient in ingredients]

        response = make_response(
            jsonify(ingredients_dict),
            200
        )

        return response 
        
api.add_resource(Ingredients, '/ingredients')


class Comments(Resource):
    def get(self):
        comments = Comment.query.all()
        comments_dict =  [comment.to_dict() for comment in comments]

        response = make_response(
            jsonify(comments_dict),
            200
        )

        return response 
        
api.add_resource(Comments, '/comments')


class RecipeIngredients(Resource):
    def get(self):

        recipe_ingredients = RecipeIngredients.query.all()
        recipe_ingredients_dict =  [recipe_ingredient.to_dict() for recipe_ingredient in recipe_ingredients]

        response = make_response(
            jsonify(recipe_ingredients_dict),
            200
        )
        return response 

api.add_resource(RecipeIngredients, '/recipe_ingredients')  


if __name__ == '__main__':
    app.run(port=5555, debug=True)
