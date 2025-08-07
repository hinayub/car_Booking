from rest_framework import serializers
from .models import customUser, CarDetail


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = customUser
        fields = "__all__"


class CarDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarDetail
        fields = "__all__"
