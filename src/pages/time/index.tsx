type Props = {
  time: string
}

export async function getStaticProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 60,
  }
}

export default function index({ time }: Props) {
  return (
    <div>{time}</div>
  )
}
