import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='new-password'>New Password</label>
          <input type='password' id='new-password' />
        </div>
        <div className={classes.action}>
          <button>Change Password</button>
        </div>
      </form>
    </section>
    
  );
}

export default ProfileForm;
