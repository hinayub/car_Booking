from django.urls import path
from .views import loginUser, signUpUser, upload_car, getAllAdds, adDetail

urlpatterns = [
    path("login/", loginUser),
    path("signup/", signUpUser),
    path("uploadCarDetail", upload_car),
    path("getAllAdds", getAllAdds),
    path("getDetail/<int:adId>/", adDetail),
]
