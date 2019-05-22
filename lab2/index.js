const arrayUtils=require('./arrayUtils');
const stringUtils=require('./stringUtils');
const objUtils=require('./objUtils');

// Head Tests
try {
    // Should Pass
    const headOne = arrayUtils.head([2,3,4]);
    console.log('head passed successfully');
 } catch (e) {
    console.error('head failed test case');
 }
 try {
    // Should Fail
    const headTwo = arrayUtils.head(1234);
    console.error('head did not error');
 } catch (e) {
    console.log('head failed successfully');
 }

 // Capitalize Tests
 try {
    // Should Pass
    const capitalizeOne = stringUtils.capitalize("bcaiidvif");
    console.log('capitalize passed successfully');
 } catch (e) {
    console.error('capitalize failed test case');
 }
 try {
    // Should Fail
    const capitalizeTwo = stringUtils.capitalize(1234);
    console.error('capitalize did not error');
 } catch (e) {
    console.log('capitalize failed successfully');
 }

 // countChars Tests
 try {
    // Should Pass
    const countcharsOne = stringUtils.countChars('Hello, the pie is in the oven');
    //console.log(ountcharsOne);
    console.log('countChars passed successfully');
 } catch (e) {
    console.error('countChars failed test case');
 }
 try {
    // Should Fail
    const countcharsTwo = stringUtils.countChars(1234);
    console.error('countChars did not error');
 } catch (e) {
    console.log('countChars failed successfully');
 }

 // mapValues Tests
 try{
    // Should Pass
    const mapValuesOne = objUtils.mapValues({a:1, b:2, c:3},n=>n+1);
   console.log('mapValues passed successfully');
 }catch (e) {
    console.error('mapValues failed test case');
 }
 try {
    // Should Fail
    const mapValuesTwo = objUtils.mapValues(1234);
    console.error('mapValues did not error');
 }catch (e) {
    console.log('mapValues failed successfully');
 }