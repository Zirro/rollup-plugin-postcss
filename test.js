import test from 'ava';
import requireFromString from 'require-from-string';
import {
  buildDefault,
  buildWithParser
} from './tests/build';

test('test postcss', async t => {
  const data = await buildDefault().catch(err => console.log(err.stack));
  requireFromString(data);
  const styles = window.getComputedStyle(document.body);
  t.is(styles.margin, '0px');
});

test('use sugarss as parser', async t => {
  const data = await buildWithParser().catch(err => console.log(err.stack));
  requireFromString(data);
  const styles = window.getComputedStyle(document.body);
  t.is(styles.fontSize, '20px');
});
