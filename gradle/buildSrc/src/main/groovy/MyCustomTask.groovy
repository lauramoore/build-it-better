import org.gradle.api.DefaultTask
import org.gradle.api.tasks.TaskAction

/**
 * User: Marty
 * Date: 2/10/14
 * Time: 1:51 PM
 * 
 * small custom Gradle task for demonstration purposes.
 */
class MyCustomTask extends DefaultTask{

    @TaskAction
    public void doSomething()
    {
        println "Hello for MyCustomTask called ${this.name}"
    }
}
