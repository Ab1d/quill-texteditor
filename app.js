var quill = new Quill('#editor');
  quill.addModule('toolbar', { container: '#toolbar' });
  quill.on('text-change', function(delta, source) {
    console.log('Editor contents have changed', delta);
  });
console.log(quill.getText());