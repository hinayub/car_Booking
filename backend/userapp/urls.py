from django.urls import path
from .views import (
    loginUser,
    signUpUser,
    upload_car,
    getAllAdds,
    adDetail,
    userAdDetail,
    userAdDelete,
    editAd,
    editAdDetail,
)

urlpatterns = [
    path("login/", loginUser),
    path("signup/", signUpUser),
    path("uploadCarDetail", upload_car),
    path("getAllAdds", getAllAdds),
    path("getDetail/<int:adId>/", adDetail),
    path("userAd/<int:ownerId>/", userAdDetail),
    path("deleteAd/<int:adId>/", userAdDelete),
    path("editAd/<int:adId>/", editAd),
    path("editAdDetail/<int:id>/", editAdDetail),
]
