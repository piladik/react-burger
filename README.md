# README: Stellar Burger Web Application

## Project Deployment

The Stellar Burger web application is currently deployed and can be accessed using the following link: https://piladik.github.io/react-burger/

## Overview

Stellar Burger is a React-based web application that allows users to create and order burgers using ingredients fetched from an API. One of the unique features of the app is the drag and drop feature, which enables users to add ingredients to their burgers by simply dragging and dropping them into the constructor. This feature was implemented using the react-dnd library.

## User Authentication

User authentication was implemented using JSON Web Tokens (JWT). Upon successful login, a token is generated and stored in the user's browser. This token is then sent with each subsequent request to authenticate the user. The token has a limited lifespan and must be refreshed periodically to maintain access.

## Order History

In the /feed route, users can view the last 50 orders that have been made by all users, as well as the total amount of orders made today and of all time.

## Order Details

Users can view the details of an order by clicking on the order in the /feed route. A modal window will be opened with all the information about the order, including the ingredients used, the price of each ingredient, and the total price of the order.

## User Profile

In the /profile route, users can change their name and password. Additionally, users can view their order history, which includes all orders that they have made on the application. These orders are sorted by date and include the details of each order, such as the ingredients used and the total price.
