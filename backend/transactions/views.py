from django.shortcuts import render

# Create your views here.

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Transaction

@api_view(['POST'])
def save_transaction(request):
    data = request.data

    tx, created = Transaction.objects.get_or_create(
        tx_hash=data['tx_hash'],
        defaults={
            'sender': data['sender'],
            'receiver': data['receiver'],
            'amount': data['amount'],
            'message': data.get('message', ''),
        }
    )

    return Response({"status": "saved"})

