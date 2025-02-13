# Generated by Django 5.1.2 on 2025-02-05 22:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_report_unique_together'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='ban_status',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='ban_until',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
