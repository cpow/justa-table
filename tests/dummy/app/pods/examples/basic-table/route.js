import Ember from 'ember';
import faker from 'faker';

export default Ember.Route.extend({
  model() {
    let users = [];
    for (let i = 0; i < 100; i++) {
      let user = Ember.Object.create({
        displayName: faker.name.findName(),
        image: faker.image.avatar(),
        one: faker.company.catchPhrase(),
        two: faker.company.bsBuzz()
      });

      users.push(user);
    }

    return Ember.A(users);
  },

  actions: {
    imageClicked(user) {
      console.log(`${user.get('displayName')}'s image clicked.`);
    },

    removeSomeRows() {
      let users = this.get('controller.model');
      Ember.set(this, 'controller.model', Ember.A(users.slice(5, 50)));
    }
  }
});
