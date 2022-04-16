from django.urls import path, include
from rest_framework import routers
from .views import *

r = routers.DefaultRouter()
r.register("lists", TaskListView, basename="list")
r.register("tasks", TaskView, basename="task")
r.register('users', UserViewSet, basename='user')

urlpatterns = [
    path("", include(r.urls)),
    path('logout/', handle_logout),
    path('login/', handle_login),
    path('whoami/', who_am_i)
]