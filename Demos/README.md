# One More Step In Vue: Demo Part

### Description

This is self-learning project for Vue.js, which follows an on-line course of Dell Lee [here](https://coding.imooc.com/class/203.html).

It also include some statements, summaries and knowledge suppliment on my own to help understanding.

Welcome to any learn-mate. :P


### Note

- All the sub-folders in this part reference to `vue.js` file at the root.
- There's a `vue-demo.sublime-snippet` file at the root for saving time to create a clean vue demo. ☺️


### Understanding Vue.js

##### MVVM vs MVP:


Compared to MVP(model-view-presenter) pattern in original web development, Vue uses MVVM(model-view-view model) pattern. In MVP, much of code lines in presenter is to handle DOMs here and there. While in Vue, we can only focus on the view (DOM) and model (plain JavaScript objects), and leave all the view-model part (including DOM listeners and data bindings) to Vue itself. Try to understand MVVM, and Vue. :D