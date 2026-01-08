from masonite.routes import Route

ROUTES = [
    Route.get('/users', 'UsersController@index')
]