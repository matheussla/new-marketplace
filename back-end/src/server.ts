import process from 'process';
import app from './app';

app.listen(process.env.PORT || 3000, () => {
  console.log(`Running at port ${process.env.PORT}`);
});
