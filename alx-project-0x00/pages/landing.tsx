import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      <Button title="small Button" styles="text-sm py-1 px-3 rounded-sm" />
      <Button title="Medium full" styles="text-base py-2 px-4 rounded-full" />
      <Button title="Large full" styles="text-lg py-3 px-6 rounded-md" />
    </div>
  )
}
export default Landing