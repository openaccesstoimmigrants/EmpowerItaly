import Image from "next/image"
import conclusions from "@/public/conclusions.jpg"

export default function Conclusion() {
  return (
      <section id="conclusions" className="pb-6">
        <article className="max-w-7xl m-auto">
            <div className="grid grid-cols-12 gap-6 h-full">
                <div className="bg-indigo-100 rounded-2xl p-8 md:p-12 col-span-12 lg:col-span-8 grid                                     hover:drop-shadow-md transition-all delay-200"> {/* `grid` class is needed to use `place-self-end` on the button */}
                    <h1 className="font-bold text-5xl md:text-6xl text-indigo-900 pb-8">Our conclusions</h1>
                    <p>Placerat in maecenas iaculis at lacus enim. Nibh lorem phasellus tortor eu diam adipiscing a facilisis scelerisque. Turpis pellentesque tristique tellus vitae. Consectetur egestas ut faucibus in nam. Neque ipsum tristique pulvinar faucibus lorem dignissim auctor. Dignissim aliquam diam dis mattis felis ligula. Et aliquet elementum amet at.
                    </p>
                    <p> Nisi ac in lorem quis orci cras sed varius vitae. Sem curabitur facilisi mauris magna faucibus id malesuada pretium porta. Enim parturient interdum interdum felis amet aliquet mauris. Semper pretium blandit tempor turpis mi. Scelerisque pellentesque non felis adipiscing sed sed dis euismod. Fermentum amet sociis dignissim velit integer lectus. Consectetur nibh viverra enim aliquam feugiat.
                    </p>
                    <button className="
                                place-self-end
                                mt-6
                                rounded-full
                                border
                                border-indigo-600
                                text-indigo-600
                                py-2 px-6
                                uppercase
                                hover:bg-indigo-600
                                hover:text-indigo-100
                                transition-all"
                    >
                        See documentation
                    </button>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <Image
                        src={conclusions}
                        alt="conclusions"
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>
            </div>
        </article>
      </section>
  )
}
