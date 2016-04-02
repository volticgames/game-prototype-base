/**
 * Created by Ben on 2/04/2016.
 */
package worlds {
    import net.flashpunk.graphics.Image;

    import volticpunk.worlds.Room;

    public class DemoRoom extends Room {
        public function DemoRoom(fadeIn: Boolean = false) {
            super(fadeIn);
            disableDarknessOverlay();

            addGraphic(Image.createCircle(32, 0xFFFFFF), 0, 600, 300);
        }
    }
}
