import Image from "next/image"
import profilePicture from "../../public/profile-picture.svg"
import styles from "./profile-circle.module.scss"

function ProfileCircle() {
  return (
      <Image src={profilePicture} className={styles.profileCircle} alt="Profile picture" />
  )
}

export default ProfileCircle
