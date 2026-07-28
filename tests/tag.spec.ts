import {test} from "@playwright/test";
import { type } from "node:os";


test('title test @sanity', async({})=>{
    console.log('title test');
    
});

test('payment test @regression',async({})=>{
    console.log('new user');
}
);

test('home page test', {tag:['@home','@sanity']},async({})=>{
    console.log('home page test');
});

test('cart page',{
    annotation:{
        type: 'issue',
        description: 'https://abc.com'


    },},
  async ({})=>{
 console.log('new test');
}
);

test.beforeAll(async({})=>{
    console.log('new era')
}
);
