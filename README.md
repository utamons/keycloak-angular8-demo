# Keycloak demo (Angular 8)

This is a demo for an Angular 8 application, using OpenID authentication with Keycloak (https//www.keycloak.org).

You should install and configure Keycloak before to start, according to Keycloak documentation. Some tips:

 * Create a realm
 * Create a client in this realm
 * Create two users and two roles (**user1**, **user2** and **USER1**, **USER2**)
 * Don't forget to add _http:/localhost:4200_ to 'Web-Origins'.
 * Add _http:/localhost:4200/*_ to 'Valid Redirect URIs'
 * 'Access type': public
 * 'Standard flow enabled': true
 
 This demo is intended to call backend service, with the same OpenID authentication. Here's an implementation: https://github.com/utamons/keycloak-springboot-demo
 
 Use '_ng serve_' to start.
 
 There are two pages. /home requires authentication, and /nonauth doesn't require.
 
 Also there are three API calls:
 
 * /api/user1 - for USER1 role
 * /api/user2 - for USER2 role
 * /api/nonauth - for unauthenticated user.
 
 In order to enable both backend and frontend to work in localhost, the demo uses proxy configuration in proxy.config.json. You may not need it in a live application.
 
 
 
 
 
