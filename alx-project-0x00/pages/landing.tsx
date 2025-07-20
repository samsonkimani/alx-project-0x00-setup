import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      <Button title="Rounded sm" styles="rounded-sm" />
      <Button title="Rounded md" styles="rounded-md" />
      <Button title="Rounded full" styles="rounded-full" />
    </div>
  )
}
export default Landing