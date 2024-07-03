# Generated by Django 5.0.6 on 2024-07-02 22:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recommandersystem', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='favorite',
            unique_together=None,
        ),
        migrations.RemoveField(
            model_name='favorite',
            name='movie',
        ),
        migrations.RemoveField(
            model_name='favorite',
            name='user',
        ),
        migrations.DeleteModel(
            name='Movie',
        ),
        migrations.DeleteModel(
            name='Favorite',
        ),
    ]
