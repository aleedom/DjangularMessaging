# DjangularMessaging

Django and many other python libraries tend not to play nicely with "realtime" applications because django, and many components it relise on to serve webapplicatoins are syncronous.  Syncronous in this sence meaning that while a thread is serving a request, it is blocking.

Blocking threads don't work with websockets, the primary driver of "realtime" webapplications, because the connection needs to be maintained while the client is active.  So for 1000 clients, 1000 theads are needed.  

Other languages like nodejs, run on an asyncronous software stack which makes them ideal for 'websockets'.  

You might ask, if python and django can't do websockets how do you get a "realtime" app with a django backend?  The trick is that you have a seperate, asyncronous process run in the background, or on a seperate server.  The sole purpose of that other process is to deal with websockets.  

Clients then subscribe to the channels they want to listen to with the socket server, but when they dont send updates directly to the server, instead they send the updates to the django application, which afte persisting the data into the database passes the information along to the socket server to notifiy all the other clients listening for updates on that channel. 
