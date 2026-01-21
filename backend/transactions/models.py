from django.db import models

class Transaction(models.Model):
    tx_hash = models.CharField(max_length=66, unique=True)
    sender = models.CharField(max_length=42)
    receiver = models.CharField(max_length=42)
    amount = models.CharField(max_length=50)
    message = models.TextField(blank=True)
    network = models.CharField(max_length=20, default="sepolia")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.tx_hash
