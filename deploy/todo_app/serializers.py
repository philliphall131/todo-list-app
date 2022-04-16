from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *

class TaskListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskList
        depth = 1
        fields = ['id', 'user', 'name', 'tasks']

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'name', 'taskList', 'completed', 'due_date']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)


