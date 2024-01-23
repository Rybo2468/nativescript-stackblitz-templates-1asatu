var count = 0;
export function onTap(args) {
  var button = args.object;
  count++;
  button.text = 'Button tapped ' + count + ' times';

  if (count % 2 == 0) {
    button.color = 'red';
    button.backgroundColor="orange";
  } else {
    button.color = '#00ff00';
  }

  console.log('button tapped');
}