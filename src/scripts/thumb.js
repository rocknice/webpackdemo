import Thumb from './index.js';
import './add.js';
import '../styles/index.css';
import $ from 'jquery';

   var d = new Thumb(0, $('#container'));    //这里给jquery写了一个插件
   d.clickAction();