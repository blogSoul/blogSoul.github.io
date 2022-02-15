import styled from "@emotion/styled"
import { FunctionComponent } from "react"

const PROFILE_IMAGE_LINK = 'https://avatars.githubusercontent.com/u/42922298?v=4'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt={"Profile Image"}/>
}

export default ProfileImage
