import * as styles from './styles'

export type HomeProps = {
  name?: string
}

const Home = ({ name = 'React CRA Standalone' }: HomeProps) => (
  <styles.Wrapper>
    <div>
      <h1>{name}</h1>
    </div>
  </styles.Wrapper>
)

export default Home
