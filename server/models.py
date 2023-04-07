from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

#serialize rules and db relationships 

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ("-recipe_users.recipe", "-recipe_users.user")

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    username = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable = False)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    @hybrid_property
    def password_hash(self):
        # Attempts to access the password_hash should be met with an AttributeError.
        raise AttributeError("Password hashes may not be accessed")
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8')
        )
        self._password_hash = password_hash.decode('utf-8')
    
    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8')
        )

    def __repr__(self):
        return f"""<User {self.id}; Name: {self.username}.>"""



class Ingredient(db.Model, SerializerMixin):
    __tablename__ = 'ingredients'

    serialize_rules = ('-recipe', )

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())
    #something new 

    recipe_id = db.Column(db.Integer, db.ForeignKey("recipes.id"))

class Recipe(db.Model, SerializerMixin):
    __tablename__ = 'recipes'

    serialize_rules = ('-recipe_users.recipe', '-recipe_users.user', '-ingredients.recipe')

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String)
    title = db.Column(db.String)
    category = db.Column(db.String)
    description = db.Column(db.String)
    instructions = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    ingredients = db.relationship("Ingredient", backref='recipe')
    # recipe_users = db.relationship("RecipeUser", backref="recipe")
    comments = db.relationship('Comment', backref='recipe')

    users = association_proxy('recipe_users', "user")

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments'

    serialize_rules = ('-ingredients,')

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer) 
    content = db.Column(db.String)
    text = db.Column(db.String)
    name = db.Column(db.String)
    update_id = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())
    
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'))

class RecipeIngredients(db.Model, SerializerMixin):
    __tablename__ = 'recipe_ingredients'

    # serialize_rules = 
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Float)
    unit =  db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    recipe_id = db.Column(db.Integer, db.ForeignKey("recipes.id"))
    ingredient_id = db.Column(db.Integer, db.ForeignKey("ingredients.id"))


#take out unit and maybe replace both with measurments 
