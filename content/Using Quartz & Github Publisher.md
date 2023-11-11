---
publish: "true"
---
The Obsidian Plugin [Github Publisher](obsidian://show-plugin?id=obsidian-mkdocs-publisher) ([github link](https://github.com/ObsidianPublisher/obsidian-github-publisher)) works amazingly well with quartz! Not only does it allow you to update your digitalgarden straight from Obsidian (on both mobile & desktop no less!) but it also only uploads your published & public files to the repo! It also converts dataview queries into markdown before uploading!

Not only that but this is deployment agnostic, so if you don't want to use GitHub Pages you don't have to!

## Setup
This guide assumes you have both run through the quartz setup and [configured a deployment host](https://quartz.jzhao.xyz/hosting). After that, follow these steps:

1. Install the plugin (obviously)
2. [Generate a GitHub Token](https://github.com/settings/tokens) that has permissions to push and perform automatic PRs to your quartz repo
	- Consider using a [finegrained token](https://github.com/settings/tokens?type=beta) for more security, though you're forced to select a expiration date unlike the general one
3. Open your GitHub Publisher options, and in the **GitHub Config** tab: 
	1. Fill in your **github username**
	2. Fill in the name of your **quartz repo**
	3. Paste in the **token you generated earlier**
	4. Enter **the branch** your digital garden lives on (which is **v4** by default)
	5. Toggle **Automatically Merge Pull Requests** to **on**
4. Next, in the **upload config** tab, set file tree option to **Obsidian Path** and the root folder to **content**
- (Optional) If you use dataview, in the **Text & Link Converters** tab toggle the **Dataview** option
- (optional) in the **Plugin Settings** tab, turn on **Copy Link** and set **Base Link** to your site's domain!

And that's it! Now just run **Github Publisher: Upload all shared notes** and wait for the deployment to build! There are many other settings you can apply, such as automatically [renaming a file or path](https://obsidian-publisher.netlify.app/plugin/settings/upload/?h=edit#regex-on-filename-folder-path) (I use this for my index.md!) To explore all of your options, [check out the plugin's documentation](https://obsidian-publisher.netlify.app/)