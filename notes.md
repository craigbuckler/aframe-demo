# Presentation notes

## 1
Hi. Thanks for coming

My name's Craig Buckler

This talk is going to show how any developer can start using virtual and augmented reality in their projects


## 2
Probably a dumb question, but who's excited by VR and AR?

I guess you wouldn't be here if you weren't interested in the technologies!


## 3
but if you've ever attempted to create your own scenes you've come up against the toughest challenged in IT


## 4
First, it just keeping up with this stuff.


## 7
so they're on the cusp of mainstream adoption


## 8
like they have been for 30 years or more

anyone recognise these.

Sega VR and Nintendo's Virtual Boy

Sega announced their device in 1991 but it was never released
The Virtual Boy lasted about a year and has been airbrushed out of Nintendo history


## 9
So lets look at user problems first.

How many of you own...

So you've all come to this presentation yet only a small percentage own the hardware which enables it

Worse is that I'm doing this presentation and evn

Of those who do own a headset, how many use it every day?
or every week?


## 10
industry has been guilty of over-hyping this stuff

it's still an expensive purchase especially when most devices need other high-end hardware

they're not selling well
Facebook has dropped the price of the Oculus several times

and that's partly because there's relatively little to do on the devices

once you've ridden a virtual roller coaster, played a couple of games and watched a 360 degree video, there's not a lot else

and a lot of the time it's impractical. It's a faff to put on a headset and you can't keep it on for long anyway.

overall, it's a chicken and egg situation:

few buying VR because there's little content
few produce VR content because few people have a headset


## 11
but there are some fabulous uses

entertainment is the most obvious in games and video

but education and training could be revolutionised
we can't easily get to Mars but that doesn't stop us flying around Olympus Mons
and I would rather a doctor had VR experience of a complex operation than using me as a guinea pig

VR meetings could replace travel and Facebook has recently launched a system to do just that

there are also opportunities for research and data visualisation
you can walk around complex diagrams and spot things which may be missed on a 2D screen

and there's ecommerce
now I'm not suggesting Tesco is going to provide a virtual shopping experience where I can drive my virtual car to a store, roam virtual isles, add virtual items to my virtual basket before queuing in a virtual checkout

but there are opportunities for big purchases
if you're buying a house, a car or a holiday, it's worth strapping on a headset and looking at that item because it could save significant time and money


## 12
and of course there are other uses which we don't need to go into detail


## 13
So let's presume you're convinced.

And you're working for a big estate agent or travel agent and you think it'd be great to have 360 videos or virtual tours.

Where do you start?

First, let's face it, VR is difficult.

You need to have 3D expertise, consider lighting, tracking, frame rates and more

then how do you get your system working on all the major devices
especially when they have different hardware, platforms, APIs

then you need to submit your VR app to numerous AppStores with no guarantee of success

and finally, have you just prevented access from the large majority of users who don't have a headset or can't be bothered to strap it on?


## 14
what we need


## 15
Fortunately, we have an answer.

The web


## 16
all VR devices can show web content and browsers have two key technologies:

The first is WebGL which allows us to generate dynamic hardware-accelerated 3D content using JavaScript

WebGL is supported in every mainstream browser

Version 2 is also supported in the Blink-based browsers, Firefox and Safari on Mac OS but not iOS yet.

You can write your own WebGL code but most people use Three.js or generate it from software such as Unity

The next API is WebVR which provides access to VR hardware such as sensors, pointing devices and head-mounted displays.

WebVR is supported by pretty much nothing other than...
any guesses?
Microsoft Edge. And even that's just for just Hololens augmented reality.
It's also supported in Android Chrome for Google Daydream and Cardboard.
And it's currently behind flags in Firefox and desktop Chrome.

But fortunately there are some WebVR polyfills.


## 17
Both those APIs are low level

you still need to manage differing hardware such as pointing devices
and it remains difficult to support standard non-VR displays


## 18
The JavaScript community abhors a vacuum

So we have A-Frame:
a Mozilla-led project which has been in development for a couple of years

And there are a few others out there such as React VR.


## 19
A-frame benefits:

very easy to use
you use standard HTML - A-Frame adds a number of its own tags
they're not standard web components, but it's similar

out of the box it supports a variety of shapes, animations, audio, lights, camera controls, object imports
and even has a built-in scene inspector

you can attach event handlers in JavaScript in the same way you do for any other element

it's component-based so you can extend it
there's a registry with components for animations, water, physics, motion capture, particles, speech control, text and augmented reality

it's fast: they aim for 90 frames per second

the library itself is around a megabyte but gzips to 325KB
your scene assets can be heavy but everything I'm demonstrating today is typically a few hundred KB

and it works everywhere
in your browser, on a phone, and on VR headsets
your 3D scenes will simply adapt to the device

In fact, this whole presentation system uses it and was built in half a day
I wrote a few functions to dynamically create slides and move a camera into place

we can switch back to an interactive camera and walk around

(press C if you want to stroll around)
