---
title: Raise your VR A-game with A-Frame
author: Craig Buckler
epub: https://convertfiles.online/convert/md/epub
---

# 1

Hi. Thanks for coming

My name's Craig Buckler

I'm a freelance full-stack web developer

and I'm available for hire!

This talk is going to show how any of you can start using virtual and augmented reality in your projects today even though it appears to be a massive insurmountable challenge.


# 2

Probably a dumb question, but who's excited by VR and AR?

I guess you wouldn't be here if you weren't interested in the technologies!


# 3

but if you've ever attempted to create your own VR systems you've come up against the toughest challenges in IT


# 4

The first big problem is just keeping up with this stuff.

There's something new to learn every day.


# 5

The second biggest problem in IT is dealing with user interaction

VR is an nuanced and intimate experience

users instinctively know when something feels wrong even if they can't explain what the issue is


# 6

And the third biggest problem in IT is solving both of these challenges in a single 20-minute presentation


# 7

Despite these issues, I think everyone would agree that VR and AR are on the cusp of mainstream adoption


# 8

like they have been for 30 years - if not longer

anyone recognise these.

## Sega VR
they announced their device in 1991 but it was never released

## Nintendo Virtual Boy
This lasted about a year and has been airbrushed out of Nintendo history and it wasn't really VR anyway


# 9

So lets look at the reasons why it's taking so long for VR to become a success.

How many of you own...


# 10...15

...cardboard

* so we're all technical people
* we're all interested in VR technology or we wouldn't be here
* I'm presuming most of us are reasonably affluent

yet only a small percentage of you own suitable hardware

Worse is that I'm doing this presentation and even I only have cardboard devices

Those who do own a headset, how many use it every day?
or every week?


# 16

as an industry, we've been guilty of over-hyping VR

it's still an expensive purchase especially when most devices need other high-end hardware such as a PC, console or phone

they're not selling well - Facebook has dropped the price of the Oculus several times

and that's partly because there's little to do on the devices

once you've ridden a virtual roller coaster, played a couple of games and watched a 360 degree video, what else is there?

and a lot of the time it's impractical

it's a faff to put on a headset and you can't keep it on for long without throwing up all over your cat

we have a chicken and egg situation:

* few are buying VR because there's little content
* few are producing VR content because no one has a headset


# 17

but there are some fabulous uses

entertainment is the most obvious in games and video

but education and training could be revolutionised

we can't easily get to Mars but that doesn't stop us flying around Olympus Mons

and I would rather a doctor had VR experience of a complex operation than using me as a guinea pig

VR meetings could replace travel - Facebook has recently launched a system to do just that

there are also opportunities for research and data visualisation - you can walk around complex diagrams and spot things which could be missed on a 2D screen

and there's ecommerce

now I'm not suggesting Tesco is going to provide a virtual shopping experience where I can drive my virtual car to a virtual store, roam virtual isles, add virtual items to my virtual basket before virtually queuing in a virtual checkout

but there are opportunities for big purchases

if you're buying a house, a car or a holiday, it's worth strapping on a headset and looking at that item because you could save significant amount time and money


# 18

and of course there are a few other uses

which we don't need probe too rigourously


# 19

So let's presume you and your client are convinced.

you're working for a big estate agent or travel agent

and you think it'd be great to have 360 degree tour of a house or hotel

Where do you start?

First, let's face it, VR is difficult.

You need to have appropriate capturing hardware, 3D expertise, consider lighting, user tracking, frame rates, networking and more

then how do you get your system working on all the major devices

that's tricky when they have different hardware, requirements, platforms and APIs

then you need to submit your VR app to numerous AppStores with no guarantee of success

and even if you get your VR working on all popular devices

have you just stopped the large majority of users who don't have a headset

or can't be bothered to strap their headset on?


# 20

what we need... read it

You shouldn't be prevented from using VR just because you're using a standard laptop or phone


# 21

Fortunately, we have a solution.

of course! The web


# 22

all VR and standard devices have browsers which implement two key technologies:

## The first is WebGL

this allows us to generate dynamic hardware-accelerated 3D content using JavaScript

WebGL is supported by every mainstream browser

Version 2 is also supported in the Blink-based browsers, Firefox and Safari on Mac OS but not iOS yet.

You can write your own WebGL code but most people use Three.js or generate it from software such as Unity

## The next API is WebVR
this provides access to VR hardware such as sensors, pointing devices and head-mounted displays.

WebVR has some support:

* Android Chrome if you're using Google Daydream or Cardboard
* Desktop Chrome has some support but it's behind a flag
* Firefox on Windows - not phones
* Microsoft Edge - and even that's just for just Hololens augmented reality.

But fortunately there are WebVR polyfills.


# 23

Both those APIs are low level

you still need to manage differing hardware such as pointing devices

supporting standard 2D flat displays remains a challenge


# 24

The JavaScript community abhors a vacuum

So we have A-Frame:

a Mozilla-led project which has been in development for a couple of years

And there are a few others out there such as React VR.


# 25

A-frame benefits:

**very easy to use**


you use standard HTML - A-Frame adds a number of its own tags

out of the box it supports a variety of shapes, animations, audio, lights, camera controls, object imports

they're not standard web components, but it's a similar concept
and you attach event handlers in JavaScript in the same way you do for any other element

and **components can be extended**

there's a registry with libraries for animations, water, physics, motion capture, particles, speech control, text and augmented reality

and it's also tool agnostic so A-frame works with other frameworks

**it's fast**: they aim for 90 frames per second

the library itself is around a megabyte but **gzips to 325KB**

That includes three.js and a WebVR polyfill

your scene assets can be heavy but everything I'm demonstrating today is typically a few hundred kilobytes

and even has a built-in scene inspector

that does load in other assets but it's very useful

the biggest benefit: **it works everywhere**

in your browser, on a phone, and on VR headsets - your 3D scenes will simply adapt to that device


# 26

So I expect you're itching to see it in action

We'll you've all been in Virtual Reality for the whole of this presentation!

It was built in A-frame in a few hours

I wrote a few functions to dynamically create slides and move a camera into place

we can switch back to an interactive camera and walk around

*(press Escape or tab if you want to stroll around)*

> If you go to this URL now you can follow along.


# exeter.html

So let's look at a really basic example.

I downloaded this 360 degree image of a famous Exeter landmark from Flickr.

So the first thing we need is the A-frame library.
That must go in the HTML head.

We then require a single `<a-scene>` tag in our body.

A-frame uses the whole browser window although you can use it in an iframe.

Next, we'll define the image within A-frame's asset management system.

This allows A-frame to pre-load and cache assets for better performance.

Next, we can use the `<a-sky>` entity. This adds a background to our scene. It's effectively the inside of a sphere with a colour or image mapped onto it.

In this case, we're referencing the exeter image.

Now this would work without any other code, but I'm going to add a camera control. This will allow the user to look around but not move their position because that would go a little weird.

And that's it!

Open this in a browser and we can look around.

If you've got a suitable phone you can move it around to see Exeter in it's full glory.

Open it on a VR device and you get the full immersive experience.


# demo.html

So let's now build another simple scene.

We'll start with the **sky** like we saw last time

then we'll add a **floor** using an `<a-plane>` tag

by default, these are vertical walls, so we need to rotate it by 90 degrees

We can then add a couple of **lights**

A-frame adds a default ambient light anyway but we can change the colour and also add other lights to make the scene more interesting.

I'm then going to add a **camera**

by default the user starts at co-ordinate 0,0,0 so that's fine
but we'll add a cursor control to help us focus on individual objects

We can now look at this and see our rudimentary scene.

> REFRESH

So lets add a stone cube using the box entity.

A-frame positions entities using an X, Y and Z co-ordinate
each unit is 1 meter in size

* X is the horizontal plane with higher numbers moving items to the right
* Y is the vertical plane with higher numbers moving items up
* Z is the depth

since you start at 0,0,0, you can see entities with a negative Z value those with a positive Z value are behind you.

So we'll create a stone box which is 2 meters in size

I could do that by setting the width, height and depth but I'm going to use a scale instead because it'll give us some advantages in a moment

The centre of that box will be positioned at 0, 1, -5 so it's directly in front of us

> REFRESH

One interesting feature of A-frame is that we can place entities inside the tag of another.

Each of those child entities inherits some of the properties of its parent such as the position, size and rotation.

So let's add some text on the front face.

The position is 0.5 of a meter from the centre of the box. But because the box is scaled by 2, this will resolve to 1 meter.

> REFRESH

So let's now add a ball on top of our box

This is red with a 0.5 meter radius which will be multipled by 2 because of our box scale

and we'll also specify an animation entity to make it bounce up and down.

> REFRESH

If we now change the Z rotation of our outer entity, we'll see that it's applied to all children.

> REFRESH

What I want to do now is enlarge the size of any entity when I point at it using the cursor

You could do that with a standard JavaScript event handler which changed the scale attribute

But because we may want to apply this functionality to any element in our scene, I've created an A-frame component to do just that.

This defines a default scale and two event handlers.

* The mouseenter event records the current scale of the object then applies the new scale
* The mouseleave event second returns it back to it's original scale

This component can then be applied to any entity using an HTML attribute.

> REFRESH

We can now see our ball enlarges in size when we hover over it.


# presentation.html

I won't go into too many details about the presentation itself because we'll be here all day.

But there's a basic scene with lighting and two cameras defined.

* The first is one which allows the user to move around
* and the second is fixed

The slide content is defined in `presentation.js` within an array of objects.

There are then a series of other configurations which define things such as the slide block sizes, gaps, colours, fonts and other factors.

Then there are just two functions:

1. makeSlides creates the slide entities from the data, and
1. cameraMove handles the events. It switches between the cameras. If the fixed camera is selected, it adds an animation to move to the next or previous slide when a key is pressed.


# ar.js

> [ ASK EVERYONE TO VISIT ar.html, SHOW hiro.html ]

Finally, we can create augmented reality using A-frame and ar.js which is an augmented reality library for detecting certain marker patterns and positioning entities.

In this demonstration, I've simply create an animated box with some text which appears when this pattern is seen by the camera.

It should work on most phones. Can anyone see it?

If not, let's try on a PC...

Interestingly, Google has also released an AR library for three.js in the last couple of weeks.

This has been integrated with A-frame and it doesn't require markers - you can use any surface.


# 27

I hope I've demonstrated that VR and AR need not be complex.

Thanks for coming along.

And thanks also to Kris, Rob and the team for organising another great conference.

You can contact me on Twitter or email.

The demonstration can be viewed online.

And the code's available on GitHub.


# 28

Do we have time for questions?
