Hi Adam, Steve, and team.

I'm a huge fan of your work, and have followed your progression all the way through KiteTail, the subsequent development of Tailwind CSS, Refactoring UI and the launch of TailwindUI.

---
I have prepared my application as a split between a [showcase website](/) and this written cover letter. 

I [designed](https://drive.google.com/file/d/1LLNc6TuaFY-zmjeafgCo1mYG8FhgCUbC/view?usp=drive_link) and [built](https://drive.google.com/file/d/1LMM2EbNoVvof2KsArMpS1le-SIGzup9S/view?usp=drive_link) the website specifically for this application.

---

The TL;DR of this application is:
- I'm a normal and easy-going person.
- I work exceptionally hard.
- I have very high standards of myself and others.
- I am passionate about everything I get stuck into. 
- I believe working at Tailwind would be the highlight of my career, and I would love the opportunity to work with you.

---

I want to start by telling you who I am, and then going into detail about my professional work.

## Who am I?

I have a wife, 2 young kids, family pets, and a lovely home in the Scottish countryside. I excelled at school, was awarded an academic scholarship in University, and earned a 3-year BSc in Computational Physics from the University of Edinburgh. I work extremely hard to be present in every aspect of my life - in my relationships and my work.

I was the sort of teenager that (somehow) balanced an active social life with daily visits to the local library so that I could use the internet to learn programming. I would learn and build my own computer from parts, and I would mod strategy games like "Command & Conquer" or "Supreme Commander" with my own 3D models in Blender for fun.

If there is one thing that drives me in my life, it's "mastery through learning". I love learning anything and everything - from engineering, product, design, DIY, physics, business, psychology, philosophy all the way through to digital sales tax laws. The one theme that binds it all is that I love personal growth and mastering new skills. I try to be a better version of myself every day, and my hobbies outside of family include my own bootstrapped SaaS products, reading, meditation, and going to the gym.

## My Work

All in, I have just over 9 years of experience working in Software Engineering.

I started off in a remote web hosting tech support role learning Sysadmin and went beyond expectations to improve the internal processes by building tools in Laravel & Vue and learning how to create Chrome Extensions for internal use.

From there, I went into a Software Development role at a product-focused digital marketing agency and delivered a high-throughput SMS marketing SaaS app and a mass-scale social media web crawling engine. I was leading projects from day 1 and quickly respected as a Senior Engineer. 

After departing that role, I went out on my own as a software contractor for different clients, learning how to rapidly deliver new SaaS app projects until I was offered a hands-on CTO role. I was **responsible for technical strategy, product, engineering and leading a small team** across iOS, Android and Web. I left that role last year, and I'm now working with an AI/IoT/Geospatial client as their Principal Engineer/Architect.

This is all to say that I've worked on countless projects, stacks, in different environments, at a number of tiny startup companies.

I have worked primarily with Laravel, Vue, React, JS/TS, Node and Tailwind. In my spare time I have tinkered with Elixir, Ruby, Crystal-lang, Java, Go and Haskell - you name it and I've probably built something in it.

## What can I bring to the table?

I love working directly with others on problems, and getting into the detail. I brought Tuple into my last workplace and loved pairing daily on issues and mentoring others.

In every role I work in, I communicate transparently, build systems and processes to move the team forward, actively push to learn as much as I can, and I sweat the small details to deliver the best product I can within the constraints I'm given.

I take time to make sure commit messages are insightful, I clean up my code before I push it to others, I refactor ruthlessly, and I make sure *every* PR or project has prose outlining the motivation for the work and what success looks like. The single most important aspect of team communication for me is built out of respect for my colleagues - I always make sure I provide full context about the topic and never just throw things over the wall.

I've built and thrown away more projects than I can count, and done my best to share my open source work with the time constraints of my work and family life. As an independent software engineer I have had to learn how to deliver value to clients quickly, and de-risk projects by tackling the elephant in the room first. Starting on the core problem to solve and worrying about things like a backend admin UI later.

I am not just a Software Engineer. I'm an Entrepreneur and Product Builder. I can work in the weeds of code all the way through to business strategy and product design.

#### Ideas
I have some Tailwind-specific ideas for projects I could work on or lead, and I'm certain I would think of many more as we go. 

- Fix annoying DX issues like Jetbrains IDEs showing rgb values for known colours instead of the tailwind config value. We could work with Jetbrains and other IDE providers to perfect little details like this.
- We could work on a build system to convert existing website CSS into compact Tailwind configuration, and use AST tools to automatically refactor and submit a draft PR to the codebase. It could even highlight when you repeat the same utility classes to encourage the creation of reusable components.
- We could look to create a Tailwind compatibility / inliner tool to make it easy to compose email templates in Tailwind and have them render in different email clients.
- We could create structured JSON editor components for Headless UI to let teams build custom DSLs / filter builders in accessible and consistent ways.
- We could create accessible data tables, error-handling, and other components for Headless UI.
- We could provide automatic upgrade tooling to move users from one Tailwind version to another, similar to https://github.com/rectorphp/rector.  Think "Laravel Shift for Tailwind CSS".
- We could write articles and documentation on best practices / idiomatic Tailwind.
- We could create courses to teach advanced CSS and animations with Tailwind.
- We could (very quickly) add an optional prefix option to Tailwind UI when copying source code.
- We could create a small native app or IDE plugin to let you rapidly search the docs without opening a browser.

### Examples of My Work
In my spare time I am building an accounting-accurate [financial forecasting SaaS app](https://drive.google.com/file/d/1LQbLtKjp90XgweBlIzJ85XDcTzWjklTT/view?usp=drive_link) for startups seeking investment in the UK. I'm particularly proud of delivering a feature that lets users model price and salary changes over time. The conventional and obvious solution to model a change would be to add a couple of fields for percentage or absolute increases and then store the new value at different points in time, but it didn't feel like a step-up in functionality. It would have gotten the job done and ticked a box, but it would not have pushed the boundary on what's possible compared with competitors. Users are used to using Excel for their financial forecasting, and **we needed to be _obviously_ better than Excel**.

I spent time tackling the problem from different angles until I eventually decided that if you can't beat them, you have to join them. **I decided to 'bring Excel' into our product.** 

**I dove deep into Parsers and Lexers to build my own formula language**, and settled on using ANTLR4 to build a temporal formula engine that would calculate and adjust values over a timeline using excel-like formulae. It meant that I was able to model price and salary increases across the entire app with one overarching solution, while providing the best user experience possible.

It's fast, easy to understand, easy to maintain, will grow to support so many new features, and provides a great user experience.
<div>
<div><img alt="GIF image of setting salaries based on custom values and variables" class="" src="/images/cover-letter/cql/output.gif"></div>
<div><img alt="Image of custom variables in use with CQL" class="flex-shrink" src="/images/cover-letter/cql/cql-variables.png"></div>
</div>

#### Writing
I don't get as much time as I would like for writing online, but I did mention digital [sales taxes](http://cf-tailwind-application.netlify.app/cover-letter#who-am-i:~:text=digital%20sales%20tax). I did a big writeup of that topic a few years ago if you would like to read it and get a taste for how I communicate. I wrote this when I was considering building a product in the space, before consulting with Stripe and finding out they were about to launch Stripe Tax:
- [Tech startup taxes](https://randomstate.notion.site/Tech-startup-taxes-595ce51c49124033b2c951545be010c6#812f79b0834e4cc5995c297f7e8127f5)
- [How digital sellers can comply with taxes around the world - DIY](https://randomstate.notion.site/How-digital-sellers-can-comply-with-taxes-around-the-world-DIY-2d059f4c79f54a9b9edfe6dac946fc8b)

#### Open Source
I have built a number of open source projects over the years, but these are the ones I'm particularly proud of _(though they haven't been updated in a while, because "kids")_:
- [OpenSSL RSA C bindings for Crystal](https://github.com/randomstate/openssl_ext) to bring RSA encryption into to the language (so that I could use it for JWT auth).
- [Bring Eloquent query builder scopes to Doctrine](https://github.com/randomstate/doctrine-scopes)
- [A PHP billing wrapper around Stripe](https://github.com/randomstate/stripe) that replicates all key APIs without hitting the API - a true 'mock' for Stripe. **It even generates stripe-compliant fake webhook events during tests**!

```php
// An example of forwarding webhooks using randomstate/stripe
$webhooks->listen(function(Event $event) {
    $this->postJson('/my/webhooks/endpoint', $event->jsonSerialize());
});

$webhooks->during(function() {
    $this->stripe->charges()->create([
        'amount' => 100,
        // etc
    ])
    
    // see charge.succeeded event at /my/webhooks/endpoint
});
```
- [A queue library for Node/JS](https://github.com/CImrie/queuely)
- [JWT authentication library for Crystal](https://github.com/randomstate/jwt)  using OpenSSL RSA bindings
- [A PHP wrapper around Camelot PDF (Python) CLI](https://github.com/randomstate/camelot-php).

## Let's do this
To round this off, I want to say that your job listing speaks to my soul, and I could triple the amount I have written to describe that in detail. I'm comfortable being self-employed and currently operate through a Ltd company in the UK. It would be genuinely thrilling to work with such an exceptional set of people and I hope you'll consider me for this position.

I hope to hear from you soon.

-Connor

<img src="/images/connor.png" alt="Connor Forsyth" width="200"/>