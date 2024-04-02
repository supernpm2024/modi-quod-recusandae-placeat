import Promise from 'core-js-pure/full/promise';

QUnit.test('Promise.try', assert => {
  assert.isFunction(Promise.try);
  assert.arity(Promise.try, 1);
  assert.true(Promise.try(() => 42) instanceof Promise, 'returns a promise');
});

QUnit.test('Promise.try, resolved', assert => {
  return Promise.try(() => 42).then(it => {
    assert.same(it, 42, 'resolved with a correct value');
  });
});

QUnit.test('Promise.try, rejected', assert => {
  return Promise.try(() => {
    throw new Error();
  }).then(() => {
    assert.avoid();
  }, () => {
    assert.true(true, 'rejected as expected');
  });
});
