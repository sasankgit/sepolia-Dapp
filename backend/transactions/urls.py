from django.urls import path
from .views import save_transaction

urlpatterns = [
    path('save/', save_transaction),
]
