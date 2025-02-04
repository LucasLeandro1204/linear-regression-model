# linear-regression-model
An npm package to make it easier to deal with a handful of values, and try to model them in one of the most used mathematical models, with an R-like accuracy algorithm<br>
![npm](https://img.shields.io/npm/v/linear-regression-model)
![GitHub repo size](https://img.shields.io/github/repo-size/nikolas-virionis/linear-regression-model)
![GitHub last commit](https://img.shields.io/github/last-commit/nikolas-virionis/linear-regression-model?style=plastic)
![npm](https://img.shields.io/npm/dy/linear-regression-model?style=plastic)<br>
![npm logo](./npmlogo.png)

- [Setup](#setup)
- [Methods](#methods)
- [Contribution Rules](#contributing)

## Setup

### Requirements:
  - Node.js installed<br>
 The ideal version, to run the package, is LTS(16.13 by the time it is being published),<br> however,
 older versions shouldn't have any issues, as the package does not use any <br> other npm packages, or
 fancy, new methods, not supported by older versions

  - Installing the module<br>
~~~powershell
npm install linear-regression-model

~~~
  - Importing the module<br>

First, there is the Linear Regression model between two different datasets, in relation to each other<br>
Which will look like something similar to this:
 ~~~ javascript
 import {LinearModel} from 'linear-regression-model'
 // or
 const {LinearModel} = require("linear-regression-model");
 // if it is preferred not to use destructuring, or constants use
 // var LinearModel = require("linear-regression-model-model").LinearModel;
 ~~~
Or if the use case for this is pending more to the behavior of one single dataset<br>
overtime, this will be more fitting:
 ~~~ javascript
 import {LinearModelOverTime} from 'linear-regression-model'
 // or
 const {LinearModelOverTime} = require("linear-regression-model");
 // if it is preferred not to use destructuring, or constants use
 // var LinearModel = require("linear-regression-model").LinearModelOverTime;
 ~~~
And to use the Correlation class, it will be some like this:
~~~ javascript
 import {Correlation} from 'linear-regression-model'
 // or
 const {Correlation} = require("linear-regression-model");
 // if it is preferred not to use destructuring, or constants use
 // var Correlation = require("linear-regression-model").Correlation;
 ~~~
Although if your use case is the overtime behaviour, i would advise the use<br>
of the [method](#correlation) in the LinearModelOverTime class<br>
But if you are using the LinearModel class, it is really up to you
## Instantiate the classes
 ~~~ javascript
 const lm = new LinearModel([1, 2, 3, 2, 3, 4], [3, 4, 5, 4, 5, 6]);
 // mandatory to pass two, same sized, all number, arrays, being the
 // orientation (x, y), being x the independent variable and y the
 // dependent: y changes according to how x changes, basically
 ~~~
 or
 ~~~ javascript
 const lm = new LinearModelOverTime([1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6]);
 // mandatory to pass one, all number, array, being the orientation y, the
 //dependent variable: y changes according to how x changes, the later is
 // generated automatically for a better representation of the behavior overtime
 ~~~
 or
 ~~~ javascript
  const corr = new Correlation([1, 2, 3, 2, 3, 4], [3, 4, 5, 4, 5, 6]);
 // mandatory to pass two, same sized, all number, arrays, being the
 // orientation (x, y), being x the independent variable and y the
 // dependent: y changes according to how x changes, basically
 ~~~
 Let it be clear, it is necessary to pass all number arrays, with more than 1 value,<br>
 in order for the algorithm to work properly, it will try to convert all the elements<br>
 to numbers, but if that is not possible, the code will crash.
 <br>
 <br>


## Methods
Both the classes have similar methods, the biggest difference between the classes being<br>
if the X axis dataset is informed or generated, therefore, the method will be showed using
the LinearModel class, the use for the LinearModelOverTime class is the exact same though

- Just to make it clear, it is necessary to pass the parameters as said in [instatiating the class](#instantiate-the-classes), above
## LinearModel and LinearModelOverTime
- getDataset
~~~ javascript
 lm.getDataset()
 // returns the dataset Informed in the Y axis
~~~

- getXAxisValues
~~~ javascript
 lm.getXAxisValues()
 // returns the dataset in the X axis, informed previously or not
~~~
- (static) radsToDegs
~~~ javascript
 LinearModel.radsToDegs(rad)
 // converts an angle in radians to degrees
 // returns the angle in degrees
~~~
- (static) getMean
~~~ javascript
 LinearModel.getMean(dataset)
 // Utility method to calculate the mean of a dataset
~~~
- (static) getMode
~~~ javascript
 LinearModel.getMode(dataset)
 // Utility method to calculate the mode of a dataset
~~~
- (static) getMedian
~~~ javascript
 LinearModel.getMedian(dataset)
 // Utility method to calculate the median of a dataset
~~~
- getDatasetLength
~~~ javascript
 lm.getDatasetLength()
 // returns the dataset length
~~~
- getSumOfDatasetValues
~~~ javascript
 lm.getSumOfDatasetValues()
 // returns the sum of all the elements in the dataset on y azis
~~~
- getSumOfXValues
~~~ javascript
 lm.getSumOfXValues()
 // returns the sum of all the elements in the dataset on x azis
~~~
- getSlope
~~~ javascript
 lm.getSlope()
 // returns the slope of the equation: the "m" on the y = mx + n function
 // which is the tangent of the inclination angle
~~~
- getAngleInRadians
~~~ javascript
 lm.getAngleInRadians()
 // returns the inclination angle in radians, like 3/4 meaning  3/4 rad
~~~
- getAngleInDegrees
~~~ javascript
 lm.getAngleInDegrees()
 // returns the inclination angle in degrees, like 43°,
 // for example 3/4 rad ~~ 43°
~~~
- getDatasetBehavior
~~~ javascript
 lm.getDatasetBehavior()
 // returns the overall macro behaviour of the dataset
~~~
- getDatasetBehavioralIntensity
~~~ javascript
 lm.getDatasetBehavioralIntensity()
 // returns the intensity of the behaviour previously measured
~~~
- getLinearCoefficient
~~~ javascript
 lm.getDatasetBehavioralIntensity()
 // returns the intensity of the behaviour previously measured
~~~
- getLinearCoefficient
~~~ javascript
 lm.getLinearCoefficient()
 // returns the linear coefficient of the equation: the "n"
 //on the y = mx + n function
~~~
- getCoefficients
~~~ javascript
 lm.getCoefficients()
 // returns both the linear coefficient and the slope
 //of the equation: the "m" and the "n" on y = mx + n
~~~
- getLinearEquation
~~~ javascript
 lm.getLinearEquation()
 // returns both the function as a string to be displayed
 // and an actual js function to make predictions, for example
 // function(x): returns Y, using the same method as the dataset
~~~
- getR2
~~~ javascript
 lm.getR2()
 // returns the coefficient of determination(R²) to find
 // the accuracy of the linear regression just calculated
~~~
### Correlation
- getCorrelation
~~~ javascript
 lm.getCorrelation()
 // returns the correlation between the datasets
~~~
- getCorrelationInterpretation
~~~ javascript
 lm.getCorrelationInterpretation()
 // returns the interpretation of the correlation index
 // between the datasets
~~~

## Correlation (class)
- (static) getMean
~~~ javascript
 Correlation.getMean(dataset)
 // returns the mean of the dataset
~~~
- (static) getDifferenceFromMeanAndElements
~~~ javascript
 Correlation.getDifferenceFromMeanAndElements(dataset)
 // returns the difference between the mean and the elements
 // of the dataset, so can be used to calculate variance
 // or standard deviation, for example
~~~
- getCorrelation
~~~ javascript
 corr.getCorrelation()
 // returns the correlation between the datasets
~~~
- getCorrelationWay
~~~ javascript
 corr.getCorrelationWay()
 // returns the way/sign the two datasets are correlated
 // to each other
~~~
- getCorrelationIntensity
~~~ javascript
 corr.getCorrelationIntensity()
 // returns the intensity of the correlation between the datasets
~~~
- getCorrelationInterpretation
~~~ javascript
 corr.getCorrelationInterpretation()
 // returns the interpretation of the correlation index
 // between the datasets
~~~

# Contributing
Well, since this is a really simple package, contributing is always welcome, just as much as creating issues experienced with the package

In order to better organize this contributions, it would be ideal that all PRs follow the template:

## PR Template
 WHAT: <br>
 A brief description of the improvements
 
 WHY: <br>
A explanation on why those changes were needed, necessary, or at least, why is was on the best interest of the package users

CHANGES: <br>
List of changes made, can be the name of the commits made, or a simple changes list

## Commits
Ideally the commits should make use of the convention of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) <br>
Something i recommend is the usage of either the [Commitizen](https://github.com/commitizen/cz-cli) terminal extension or the [Commit Message Editor](https://marketplace.visualstudio.com/items?itemName=adam-bender.commit-message-editor) VSCode Extension
