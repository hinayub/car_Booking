from django.shortcuts import render
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework import status
from .models import customUser, CarDetail
from .serializers import UserSerializer, CarDetailSerializer
from django.contrib.auth import authenticate
from rest_framework.parsers import FormParser, MultiPartParser


# Create your views here.
@api_view(["POST"])
@parser_classes([FormParser, MultiPartParser])
def signUpUser(request):

    requestemail = request.data.get("email")
    customUser.objects.filter(email=requestemail)

    if customUser.objects.filter(email=requestemail).exists():
        return Response({"err": "email exits"}, status=status.HTTP_400_BAD_REQUEST)

    serializer = UserSerializer(data=request.data)

    print(request.data)
    print(serializer.is_valid())

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def loginUser(request):
    userEmail = request.data.get("email")
    password = request.data.get("password")

    print("i am", userEmail, password)

    if customUser.objects.filter(email=userEmail, password=password).exists():
        user = customUser.objects.get(email=userEmail)
        serializer = UserSerializer(user)
        print("user is here", user)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    else:
        return Response({"error": "not exist"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser])
def upload_car(request):
    serializer = CarDetailSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def getAllAdds(request):
    carDetails = CarDetail.objects.all()
    try:
        serializer = CarDetailSerializer(carDetails, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def adDetail(request, adId):
    carDetails = CarDetail.objects.get(id=adId)
    try:
        serializer = CarDetailSerializer(carDetails)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
