const { beforeAll } = require('@jest/globals');
const { spec } = require('pactum');
// const chai = require('chai');
const { expect} = require('@jest/globals');
// import {assert, expect} from 'chai';
// const expect = require('chai').expect;

describe('All the users of City `FanCode` should have more than half of their todos task completed.', () => {
  const users = [];
  const fanCodeCityUsers = [];
  const latMin = -40;
  const latMax = 5;
  const lngMin = 5;
  const lngMax = 100;
  beforeAll(async () => {
    const fanCodeCity = await spec()
      .get('https://jsonplaceholder.typicode.com/users')
      .expectStatus(200)
      .returns((ctx) => ctx.res.json); 
    
    fanCodeCity.forEach(user => {
      // Parse lat and lng to float for comparison
      const lat = parseFloat(user.address.geo.lat);
      const lng = parseFloat(user.address.geo.lng);
      
      // Check if the user's lat and lng fall within the specified ranges
      if (lat >= latMin && lat <= latMax && lng >= lngMin && lng <= lngMax) {
        users.push(user);
      }
    });
    users.forEach((element) => {
      fanCodeCityUsers.push(element.id);
    });
  });

  it('User has the todo tasks', async () => {
    const todoData = await spec()
      .get('https://jsonplaceholder.typicode.com/todos')
      .expectStatus(200)
      .returns((ctx) => ctx.res.json); 
    todoData.forEach((element) => {
      fanCodeCityUsers.includes(element.id)
    });
  });

  it('User belongs to the city FanCode @apurva', async () => {
    await spec()
      .get('https://jsonplaceholder.typicode.com/users')
      .expectStatus(200)
      .expectJsonLength(10);

    fanCodeCityUsers.forEach(userId => {
      console.log(`User ${userId} belongs to city fancode.`);
    });
      
  });

  it('Then User Completed task percentage should be greater than 50%', async () => {
    const todoData = await spec()
      .get('https://jsonplaceholder.typicode.com/todos')
      .expectStatus(200)
      .returns((ctx) => ctx.res.json);
    const filteredUsers = todoData.filter(user => fanCodeCityUsers.includes(user.userId));
    const totalTasks = filteredUsers.length;
    const completedTasks = filteredUsers.filter(task => task.completed).length;
    const completedTaskPercentage = (completedTasks / totalTasks) * 100;
    expect(completedTaskPercentage).toBeGreaterThan(50);
  });

});
