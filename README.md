# Jenkins Custom Clean Theme

CSS and JS to implement a Rackspace Canon based as a theme for [Jenkins CI](http://jenkins-ci.org/).

Based and tested on Jenkins 1.57X.

## What is diferent from default theme?

- Various colors and fonts (by Rackspace)
- Project build status marker (by Rackspace)
- Click on Jenkins logo redirect to home
- Side panel placed below the main panel (menu still acessible through navigation bar)
- Jenkins logo font

### Before

![Before](JenkinsBefore.png "Before")

### After

![After](JenkinsAfter.png "After")

## Usage

1. Install the [Simple Theme Plugin for Jenkins](https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin)
2. Install the JQuery Plugin
3. Navigate to Jenkins > Manage Jenkins > Configure System > Theme
4. Set _URL of theme CSS_ to `http://YOUR/URL/TO/THIS/THEME/style.css`
5. Set _URL of theme JS_ to `http://YOUR/URL/TO/THIS/THEME/app.min.js`

