<?php

namespace Tests\Functional;

class HomepageTest extends BaseTestCase
{
    /**
     * Test that the index route returns a rendered response containing the text 'The Web Stack'
     */
    public function testGetHomepageWithoutName()
    {
        $response = $this->runApp('GET', '/');

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertContains('Nuragio', (string)$response->getBody());
    }

    public function testInvert()
    {
        $response = $this->runApp('POST', '/hello', ['string' => 'John']);
        $body = json_decode($response->getBody(), JSON_OBJECT_AS_ARRAY);

        $this->assertInternalType('array', $body, 'the JSON String MUST be a valid array');
        $this->assertArrayHasKey('result', $body, 'the array MUST contain a result offset');
        $this->assertEquals('Hello John', $body['result'], 'the result offset MUST be equal to Hello John');
    }

}