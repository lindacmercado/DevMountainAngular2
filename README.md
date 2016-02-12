##Angular Day 2

##Services
  What is a service?
    Universal component across the module;
    Created for a single purpose; ex user vs date should use different services

  What is a singleton?
    Universal component across the module

  What is a service's purpose?
    Data store, universal information, shared methods, bridge between controllers, business logic, ajax

  How does its purpose differ from a controller?
    Controller only interacts with the DOM;

  How can two controllers talk to each other?
    through a service that is injected

  How do services and controllers communicate?
    Injecting a service into a controller;
    The 'this' keyword makes stuff on the service public

  How can you create your own service?
    angular.module('moduleName').service('serviceName', function(){})

  What are some built in Angular services?
    Start with $:
    $http, $q, $timeout, $interval...
    can inject into controllers or other services

  Factory vs Service
    Same purpose but Service uses 'this' keyword, factory returns an object
    
  Service (Factory) vs Provider
    Providers are not like service or factory
