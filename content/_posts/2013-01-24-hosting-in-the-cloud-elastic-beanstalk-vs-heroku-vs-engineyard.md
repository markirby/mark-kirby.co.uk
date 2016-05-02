---
title: Ruby hosting in the cloud – Elastic Beanstalk vs Heroku vs EngineYard
author: Mark Kirby
layout: post
date: 2013-01-24
url: /2013/hosting-in-the-cloud-elastic-beanstalk-vs-heroku-vs-engineyard/
dsq_thread_id:
  - 1086896933

---
Three platforms stand out for cloud based hosting - Elastic Beanstalk, Heroku and EngineYard. Here I present my experiences with the three, and thoughts on which might be best to use under various factors.

To cut to the chase - Elastic Beanstalk wins, but as usual it depends on your situation.

## Common features

All the below services feature:

  * Deploy from the command line with git
  * Full support for Ruby/Rails apps
  * Gems installed and updated automatically on each push
  * Comprehensive settings to handle db:migrate
  * Integrated database support (no need to set up separate instance)

Note that none of these features came with Elastic Beanstalk when it first launched - its come a long way, so may be worth reconsidering if you'd previously disregarded it.

## Heroku

### Pros

  * Heroku **very easy to get started**, you just install the toolkit and your away
  * Documentation is **simple and straightforward**
  * Heroku is the cheapest option for a low traffic site - you can run a site with a basic (less than 10k rows) database for **free**, although it will be **quite slow** if you have a lot of traffic
  * You **don't have to add a credit card**, so you will go up in price only as and when you choose to - no nasty shocks
  * **Backups are handled automatically**
  * A **number of addons are provided**, making it easier to integrate with systems such as NewRelic for monitoring and SendGrid for emails
  * Database integration is simple with Postgres support out of the box

### Cons

  * Once you need to add power and handle more traffic the **[price goes up quickly][1]**
  * You need to **manually scale your application** by adding dynos - [a vague and somewhat confusing concept Heroku have come up with themselves][2] - this gives you \*some\* control over price, but ultimately means your site **won't cope well with unexpected spikes in traffic**
  * Customer support is **[reported to be][3] poor**, but I haven't needed to use it personally
  * Heroku is **owned by Sales Force**, which means it could be sold at any point or deprioritised
  * Unlike the others, you **can't log into your server via SSH**
  * After deploying an update the **first hit to the server takes ages**

We use Heroku for all our test applications, and for little pet projects that might grow. I wouldn't use it for actual scaling though, its too expensive and you don't get enough for your money.

## EngineYard

### Pros

  * **Scaling happens automatically**, so you can handle that spike (***although*** this can lead to a suprisingly **large bill**)
  * You can **SSH **into the server and change things
  * **Backups are handled automatically**
  * A **number of addons are provided**, making it easier to integrate with systems such as NewRelic for monitoring and SendGrid for emails
  * **Database integration is simple** with Postgres and MySQL support out of the box
  * **Support is excellent** - I've had much first hand experience of this

### Cons

  * Its a **little more work to deploy than heroku**, but not much, and after the first live publish it takes no longer to update
  * Its <strong>incredibly expensive</strong>, we once spent $100 on a month for a server without any traffic
  * EngineYard applies a [20% surcharge][4] on all of Amazons prices, as it uses Amazon for storage, IP Addresses and backup, so it will almost always be **more expensive**

I would recommend EngineYard for production products where money is no issue, and support and absolute minimal interaction with setting up addons is required.

## Elastic Beanstalk

### Pros

  * New users can [use Elastic Beanstalk free and underlying services][5] up to a certain amount **free for a year**, making it competitive with Heroku, certainly for the first year
  * A sample low traffic site on Elastic Beanstalk **after the free period is $35 per month**. To run that same site on [EngineYard would cost at least $86][4]
  * **Scaling happens automatically**, so you can handle that spike (***although*** this can lead to a suprisingly **large bill**)
  * You can **SSH **into the server and change things
  * **Backups are handled automatically**

### Cons

  * Its a little more work to set up and deploy for the first time than Heroku and even EngineYard (the toolkit needs installing manually, you can't do it as a gem), but it only takes a few mins extra
  * In order to use a database to get the same ease you would with Heroku and EngineYard you need to use <a href="http://aws.amazon.com/rds/">Amazons RDS service</a> (which provides a MySQL, Oracle or SQL Server database) which comes with <strong>variable additional charges</strong>
  * **Addons aren't provided**, so its a [tiny tiny bit more complex][6] to integrate with essential monitoring tool New Relic (although it is free for AWS users), and SendGrid. Its not much more work though.
  * Its **hard to work out how much you will pay**, although it **should always be cheaper than EngineYard** since they use AWS and add on top. Elastic Beanstalk itself is free, but you pay for bandwidth, storage, database, backups etc.
  * You don't get as much feedback from the server when pushing as you do for Heroku and EngineYard

Elastic Beanstalk is where I would recommend hosting production products to get a balance of service and price. You could even start a pet project on there right away due to the free storage tier. There are more cons, but I feel these are offset by the price for many situations.

 [1]: http://www.smashingboxes.com/heroku-vs-amazon-web-services/
 [2]: https://devcenter.heroku.com/articles/dynos
 [3]: http://www.smashingboxes.com/heroku-vs-aws-revisited/
 [4]: https://www.engineyard.com/products/cloud/pricing
 [5]: http://aws.amazon.com/pricing/elasticbeanstalk/
 [6]: http://blog.newrelic.com/2012/12/05/deploying-a-scalable-application-with-aws-elastic-beanstalk-and-new-relic/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+NewRelic+%28New+Relic+Blog%29