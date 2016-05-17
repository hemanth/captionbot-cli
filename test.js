import test from 'ava';
import fn from './';

test('image caption', t => {
	return fn('http://imgur.com/B7a15F5.jpg')
	.then(res => {
		t.is(res, 'I think it\'s a dog in the snow.');
	});
});
