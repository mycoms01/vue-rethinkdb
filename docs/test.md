# Test Report

## PhantomJS 2.1.1 (Mac OS X 0.0.0)

### Arrays

should render correct contents   <span style="color:green">✓</span>. `(1ms)`

```js
function (done) {
        expect(1).to.equal(1);
        // const Constructor = Vue.extend(Value);
        // const vm = new Constructor().$mount();
        //
        // expect(vm.$el.querySelector('.icon').textContent)
        //     .to.equal('Copyright © 2017 Snap Interactive, Inc. All Rights Reserved.');
        //
        // Vue.nextTick(function() {
        //     expect(vm.$el.textContent).toBe('Static Hosting');
        //     done();
        // });
        done();
    }
```


### Values

should render correct contents   <span style="color:green">✓</span>. `(785ms)`

```js
function (done) {
        this.timeout(5000);

        var Constructor = _vue2.default.extend(_Value2.default);
        var vm = new Constructor().$mount();

        expect(vm.$el.querySelector('span').textContent).to.equal('');

        vm.$watch('record', function () {
            _vue2.default.nextTick(function () {
                expect(vm.$el.querySelector('span').textContent).to.equal('Site Hosting');
                done();
            });
        });
    }
```
