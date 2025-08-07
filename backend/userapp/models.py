from django.db import models


# Create your models here.
class customUser(models.Model):

    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.email}_({self.id})"


class CarDetail(models.Model):
    model = models.CharField(max_length=30)
    make = models.CharField(max_length=30)
    vehicle_type = models.CharField()
    year = models.IntegerField()
    engine_capacity = models.CharField(max_length=30)
    color = models.CharField(max_length=10)
    transmission = models.CharField(max_length=10)
    condition = models.CharField(max_length=10)
    registration_city = models.CharField(max_length=20)
    hybrid = models.CharField(max_length=5)
    fuel_type = models.CharField(max_length=15)
    distance_covered = models.IntegerField()
    price = models.IntegerField()
    image = models.ImageField(upload_to="car_images/")
    owner = models.ForeignKey(customUser, on_delete=models.CASCADE)
