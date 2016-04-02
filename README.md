# Project Setup

The project is primarily developed on Mac, using Flashbuilder 4.7, Flex 4.6 and AIR 3.4.

After cloning the repository create a new project (File -> New -> Actionscript Project). Enter a name and a path (best to call it Proof for compatibility). Set the project to run as Desktop (Adobe AIR) and click finish.

Now, move this repository's contents into the src folder of the project (delete the existing one). Once that's done, open the Package Explorer in Flashbuilder and find `Main.as`. Right click on this and select "Set as Default Application".

The project will not compile currently, and should have several thousand errors. Install all dependencies before worrying.

## Dependencies

### Flashpunk

We use Flashpunk 1.7.1 currently. To add it to the project download the appropriate version from https://github.com/useflashpunk/FlashPunk/releases and keep it somewhere safe.

Then, in Flashbuilder, open the Project Properties (Project -> Properties) and then "Actionscript Build Path". Open the "Library Path" tab and click "Add SWC", navigate to where you downloaded Flashpunk and select the SWC from the folder.

### Volticpunk

Volticpunk is checked into the repository even though that's bad practice because fuck Adobe.

### Gameanalytics

Gameanalytics is checked into the repository even though that's bad practice because fuck Adobe.

### AIRControl

AIRControl is an extension that enables gamepad support on Mac OS X and Windows. Download it from https://github.com/AlexanderOMara/AIRControl as a `.zip` and keep it somewhere safe. Extract the zip, we'll be referencing a few files from it.

In Flashbuilder open the Project Properties (Project -> Properties) and then "Actionscript Build Path". Open the "Library Path" tab and click "Add SWC", navigate to where you downloaded AIRControl and select the SWC from `native_extension/AIRControl/bin/AIRControl.swc`. Then open the `Native Extensions` tab and click "Add ANE", navigate to the AIRControl folder again and select `native_extension/AIRControl/ane/AIRControl.ane`.

Now open the "Actionscript Build Packaging" section of the Project Properties and select the "Native Extensions" tab. You should see an entry for AIRControl with an "X" next to it. There is a column labeled "Package", for me there is a black box there that should actually be a checkbox. Click this to enable the extension and the "X" should become a tick.

See adding an ANE: http://help.adobe.com/en_US/flashbuilder/using/WSe4e4b720da9dedb5-2e7310a1136ab7c1811-8000.html

# Assets

Assets are compiled using several build scripts. These are powered by node.js and you will need it installed (https://nodejs.org/en/). Type `node -v` in the terminal to check your node version.

Once node is installed, you will need gulp to manage the build tasks. Install gulp with `npm install gulp -g`. You will also need to install all dependencies for the build pipeline, type `npm install` while browsing the root of the project in the terminal.

Once all this is set up, you can generate assets using `gulp assets`. This will pack all animations into spritesheets, compile a list of loadable entities for Ogmo and update `A.as` with the latest file embeds.

You can also update entities manually with `gulp entities` and pack assets with `gulp pack`.

NOTE: `gulp pack` requires ASEprite to be installed in your Applications folder.

## Linking Assets from Dropbox

To link your project assets folder to the Dropbox copy, run `ln -s ~/Dropbox/Proof/assets ./assets` in the `src` folder. You may have to adjust the command if your Dropbox folder is not located in your home folder.

# Release Builds

To create release builds, consult the separate build repositories.
