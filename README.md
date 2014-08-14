# Jenkins Custom Clean Theme

CSS and JS to implement a Rackspace Canon based as a theme for [Jenkins CI](http://jenkins-ci.org/).

Based and tested on Jenkins 1.57X

### Before

![Before](JenkinsBefore.png "Before")

### After

![After](JenkinsAfter.png "After")

## Usage

1. Install the [Simple Theme Plugin for Jenkins](https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin)
2. Navigate to Jenkins > Manage Jenkins > Configure System > Theme
3. Set _URL of theme CSS_ to `http://css.cdn.rackspace.com/canon-jenkins/style.css` (or another URL of your setting/choosing)
4. Set _URL of theme JS_ to `http://js.cdn.rackspace.com/canon-jenkins/app.min.js` (or another URL of your setting/choosing)

## To manually change SimpleTheme CSS and JS values

1. Edit: `$JENKINS_HOME/org.codefirst.SimpleThemeDecorator.xml` with code below
2. Restart Jenkins

```
<?xml version='1.0' encoding='UTF-8'?>
<org.codefirst.SimpleThemeDecorator plugin="simple-theme-plugin@0.3">
  <cssUrl>http://css.cdn.rackspace.com/canon-jenkins/style.css</cssUrl>
  <jsUrl>http://js.cdn.rackspace.com/canon-jenkins/app.min.js</jsUrl>
</org.codefirst.SimpleThemeDecorator>
```
