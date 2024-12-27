<script setup>
const headers = [
    {
        key: 'id',
        title: 'ID'
    },
    {
        key: 'name',
        title: 'Name'
    },
    {
        key: 'email',
        title: 'Email'
    },
    {
        key: 'age',
        title: 'Age'
    },
    {
        key: 'city',
        title: 'City'
    },
];
const items = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 28,
    "city": "New York"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "age": 32,
    "city": "Los Angeles"
  },
  {
    "id": 3,
    "name": "William Johnson",
    "email": "william.johnson@example.com",
    "age": 45,
    "city": "Chicago"
  },
  {
    "id": 4,
    "name": "Emma Brown",
    "email": "emma.brown@example.com",
    "age": 22,
    "city": "Houston"
  },
  {
    "id": 5,
    "name": "Michael Davis",
    "email": "michael.davis@example.com",
    "age": 37,
    "city": "Phoenix"
  }
];
</script>
<template>
    <ax-table :headers="headers" :items="items"></ax-table>
</template>